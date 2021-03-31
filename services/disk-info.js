const nodeDiskInfo = require("node-disk-info");
const fs = require('fs');

function printResults(title, disks) {
  console.log(`============ ${title} ==============\n`);

  for (const disk of disks) {
    console.log("Filesystem:", disk.filesystem);
    console.log("Blocks:", disk.blocks);
    console.log("Used:", disk.used);
    console.log("Available:", disk.available);
    console.log("Capacity:", disk.capacity);
    console.log("Mounted: ", disk.mounted, "\n");
  }
}

function diskInforamtion (disks) {
  const disksList = [];
  for (disk of disks) {
    disksList.push({
      // "Filesystem": disk.filesystem,
      // "Blocks": disk.blocks,
      // "Used": disk.used,
      // "Available": disk.available,
      "Capacity": disk.capacity,
      "Mounted": disk.mounted,
    })
  }
  return disksList;
}

function getDiskInfo() {
    const disks = nodeDiskInfo.getDiskInfoSync();
    printResults("SYNC WAY", disks);
    return {
      disks: diskInforamtion(disks)
    }
}

function retrieveFilesByPath(path) {
  const filesArray = [];

  try {
    fs.readdirSync(path).forEach((file) => {
      console.log(file);
      filesArray.push(file);
    });
  } catch(err) {
    throw new Error(`something went wrong in path ${path}`);
  }

  return {
    diskData: filesArray,
  }
}

module.exports = {
  getDiskInfo,
  retrieveFilesByPath,
};
