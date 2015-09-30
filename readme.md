Azure-Blob-Upload
=========

This package allows you to upload your files to azure blob storage. 
_This is a fork from [jamesfebin:azure-blob-upload](https://atmospherejs.com/jamesfebin/azure-blob-upload)_


Version
----

1.0


Usage
--------------

**Client**

```sh
files = document.getElementById('fileUpload');
file = files.files[0]

 AzureFile.upload(file,"uploadFile", {/*Pass some Parameters here */}, function(err,success) {
  if (err) {
    throw err;
  } else {
    //file upload was succesfull
  }
 }
 ```
 **Server**

```
 Meteor.methods({
  // Method name must match the method name from the client call. 
  // The parameters passed from the client can be referenced by file.<paramname>

  'uploadFile': function(file) {
    var response;
    if (file === void 0) {
      throw new Meteor.Error(500, "Missing File", "", "");
    }
    
    response = file.azureUpload(
      file.name, 
      "Account Name", 
      "Account Key", 
      "Container Name"
    );
    
    return console.log(response);
    // Once file is completely uploaded you get a url in the response. 
    // Remember the file is uploaded in chunks so this function will be triggered multiple times.
  }
});

```






