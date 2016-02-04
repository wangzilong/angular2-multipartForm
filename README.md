# angular2-multipartForm
A project for Angular 2 apps.

It is something similar to the [ng2-file-upload](https://github.com/valor-software/ng2-file-upload)  which only upload file.


# How to start
```
git clone https://github.com/wangzilong/angular2-multipartForm.git
cd angular2-multipartForm
npm install
# run
npm start
```
# Input File in Angularjs 2
home.html
```
<input type="file" (change)="selectFile($event)">
```
home.ts
```
selectFile($event): void {
		var inputValue = $event.target;
		this.file = inputValue.files[0];
		console.debug("Input File name: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
	}
```

# Upload multipart/form-data
home.ts
```
this.upload = () => {
			if (null == this.file || null == this.email || null == this.password){
				console.error("home.ts & upload() form invalid.");
				return;
			}
			// init form item
			if (this.multipartItem == null){
				this.multipartItem = new MultipartItem(this.uploader);
			}
			if (this.multipartItem.formData == null)
				this.multipartItem.formData = new FormData();

      // fill field of form into formData.
			this.multipartItem.formData.append("email",  this.email);
			this.multipartItem.formData.append("password",  this.password);
			this.multipartItem.formData.append("file",  this.file);
      
      // set callback function
			this.multipartItem.callback = this.uploadCallback;
			
			// upload
			this.multipartItem.upload();
		}
```
