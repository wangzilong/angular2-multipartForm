import {Component} from 'angular2/core';

import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {MultipartItem} from "../../plugins/multipart-upload/multipart-item";
import {MultipartUploader} from "../../plugins/multipart-upload/multipart-uploader";

const URL = 'http://www.example.com/rest/upload/avatar';

@Component({
	selector: 'home',
	templateUrl: 'app/components/home/home.html'
})
export class HomeComponent {
	private uploader:MultipartUploader = new MultipartUploader({url: URL});

	multipartItem:MultipartItem = new MultipartItem(this.uploader);

	email:string;
	password:string;
	file: File;

	upload : () => void;
	uploadCallback : (data) => void;

	constructor(){
		this.upload = () => {
			console.debug("home.ts & upload() ==>");
			if (null == this.file || null == this.email || null == this.password){
				console.error("home.ts & upload() form invalid.");
				return;
			}
			if (this.multipartItem == null){
				this.multipartItem = new MultipartItem(this.uploader);
			}
			if (this.multipartItem.formData == null)
				this.multipartItem.formData = new FormData();

			this.multipartItem.formData.append("email",  this.email);
			this.multipartItem.formData.append("password",  this.password);
			this.multipartItem.formData.append("file",  this.file);

			this.multipartItem.callback = this.uploadCallback;
			this.multipartItem.upload();
		}

		this.uploadCallback = (data) => {
			console.debug("home.ts & uploadCallback() ==>");
			this.file = null;
			if (data){
				console.debug("home.ts & uploadCallback() upload file success.");
			}else{
				console.error("home.ts & uploadCallback() upload file false.");
			}
		}


	}

	selectFile($event): void {
		var inputValue = $event.target;
		if( null == inputValue || null == inputValue.files[0]){
			console.debug("Input file error.");
			return;
		}else {
			this.file = inputValue.files[0];
			console.debug("Input File name: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
		}
	}


}

