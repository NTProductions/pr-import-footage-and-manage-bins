// import footage and manage bins

var thisFilePath = "C:/Users/Nate/Videos/VUYA_4444_32f.mp4";

// import some file(s)
app.project.importFiles([thisFilePath ]);
var name = thisFilePath;

var newBin = app.project.rootItem.createBin("Remove Me Bin");

// deselect newly created bin
app.project.rootItem.select();

// move something into the bin so we can delete it
app.project.rootItem.children[0].moveBin(newBin);

// remove the bin
newBin.deleteBin();