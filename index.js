const path = require('path');
const fs = require('fs');
// const originPath = path.join(__dirname, 'origin');
const originPath = 'F:/manga/Hajimete no Gal';
const fileExtentionPattern = /^[0-9]+\.+(doc|jpg|png)$/i;
const numberInString = /(\d+(?:\.\d+)*)/;

fs.readdir(originPath, function (err, files) {
	if (err) {
		return console.log('Unable to scan directory' + err);
	}
	handleSubDirectoryFolders(files);
});


function handleSubDirectoryFolders(files) {
	files.forEach(function (file) {
		let chapter = getChapterNumber(file);
		let subPath = path.join(originPath, file);

		createDirectory(`Chapter ${chapter}`);

		fs.readdir(subPath, function (err, files) {
			if (err) {
				console.log(`Error during scan subdirectory`);
				return;
			}

			files.forEach(function (file) {
				if (checkFileExtention(file) != null) {
					fs.copyFileSync(path.join(subPath, file),
						path.resolve(`${__dirname}/Chapter ${chapter}/`, file), err => {
							if (err) {
								console.log(err);
							}
						});
				}
			})
		});
	});
}


function createDirectory(directoryName) {
	const directoryPath = newDireectoryPath = path.join(__dirname, directoryName);
	if (!fs.existsSync(directoryPath)) {
		fs.mkdirSync(directoryPath);
		return directoryPath;
	}
}

function checkFileExtention(item) {
	return item.match(fileExtentionPattern);
}


function getChapterNumber(file) {
	let match = numberInString.exec(file);
	return match[1];
}