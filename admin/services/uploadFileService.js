var upload = Upload.upload({
  url: 'server/upload/url',
  data: {key: file, otherInfo: uploadInfo},
  objectKey: '[k]',
  method: 'POST' ,
  headers: {'Authorization': 'xxx'}, // only for html5
  resumeSizeUrl: '/uploaded/size/url?file=' + file.name // uploaded file size so far on the server.
  resumeSizeResponseReader: function(data) {return data.size;} // reads the uploaded file size from resumeSizeUrl GET response
  resumeSize: function() {return promise;} // function that returns a prommise which will be
                                            // resolved to the upload file size on the server.
  resumeChunkSize: 10000 or '10KB' or '10MB' // upload in chunks of specified size
  disableProgress: boolean // default false, experimental as hotfix for potential library conflicts with other plugins
  ... and all other angular $http() options could be used here.
})

// returns a promise
upload.then(function(resp) {
  // file is uploaded successfully
  console.log('file ' + resp.config.data.file.name + 'is uploaded successfully. Response: ' + resp.data);
}, function(resp) {
  // handle error
}, function(evt) {
  // progress notify
  console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.data.file.name);
});
upload.catch(errorCallback);
upload.finally(callback, notifyCallback);

/* access or attach event listeners to the underlying XMLHttpRequest */
upload.xhr(function(xhr){
  xhr.upload.addEventListener(...)
});

/* cancel/abort the upload in progress. */
upload.abort();

/*
alternative way of uploading, send the file binary with the file's content-type.
Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
This is equivalent to angular $http() but allow you to listen to the progress event for HTML5 browsers.*/
Upload.http({
  url: '/server/upload/url',
  headers : {
    'Content-Type': file.type
  },
  data: file
})

/* Set the default values for ngf-select and ngf-drop directives*/
Upload.setDefaults({ngfMinSize: 20000, ngfMaxSize:20000000, ...})

// These two defaults could be decreased if you experience out of memory issues
// or could be increased if your app needs to show many images on the page.
// Each image in ngf-src, ngf-background or ngf-thumbnail is stored and referenced as a blob url
// and will only be released if the max value of the followings is reached.
Upload.defaults.blobUrlsMaxMemory = 268435456 // default max total size of files stored in blob urls.
Upload.defaults.blobUrlsMaxQueueSize = 200 // default max number of blob urls stored by this application.

/* Convert a single file or array of files to a single or array of
base64 data url representation of the file(s).
Could be used to send file in base64 format inside json to the databases */
Upload.base64DataUrl(files).then(function(urls){...});

/* Convert the file to blob url object or base64 data url based on boolean disallowObjectUrl value */
Upload.dataUrl(file, boolean).then(function(url){...});

/* Get image file dimensions*/
Upload.imageDimensions(file).then(function(dimensions){console.log(dimensions.width, dimensions.height);});

/* Get audio/video duration*/
Upload.mediaDuration(file).then(function(durationInSeconds){...});

/* Resizes an image. Returns a promise */
// options: width, height, quality, type, ratio, centerCrop, resizeIf, restoreExif
//resizeIf(width, height) returns boolean. See ngf-resize directive for more details of options.
Upload.resize(file, options).then(function(resizedFile){...});

/* returns boolean showing if image resize is supported by this browser*/
Upload.isResizeSupported()
/* returns boolean showing if resumable upload is supported by this browser*/
Upload.isResumeSupported()

/* returns a file which will be uploaded with the newName instead of original file name */
Upload.rename(file, newName)
/* converts the object to a Blob object with application/json content type
for jsob byte streaming support #359 (html5 only)*/
Upload.jsonBlob(obj)
/* converts the value to json to send data as json string. Same as angular.toJson(obj) */
Upload.json(obj)
/* converts a dataUrl to Blob object.*/
var blob = upload.dataUrltoBlob(dataurl, name);
/* returns true if there is an upload in progress. Can be used to prompt user before closing browser tab */
Upload.isUploadInProgress() boolean
/* downloads and converts a given url to Blob object which could be added to files model */
Upload.urlToBlob(url).then(function(blob) {...});
/* returns boolean to check if the object is file and could be used as file in Upload.upload()/http() */
Upload.isFile(obj);
/* fixes the exif orientation of the jpeg image file*/
Upload.applyExifRotation(file).then(...)
