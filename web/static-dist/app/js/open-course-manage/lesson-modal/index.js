webpackJsonp(["app/js/open-course-manage/lesson-modal/index"],{b00a2728f54f5fed6ab0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a("b334fd7e4c5a19234db2"),o=n(s),l=function(){function e(t){i(this,e),this.upload_id="subtitle-uploader",this.inited=!1,this.element=$(t),this.element.length>0&&(this.init(),this.inited=!0);var a=this.element.closest("#video-subtitle-form-group");a.find("#ext_mediaId_for_subtitle").val()>0&&this.render({id:a.find("#ext_mediaId_for_subtitle").val()})}return r(e,[{key:"init",value:function(){var e=this;this.element.on("click",".js-subtitle-delete",function(){var t=$(this);$.post(t.data("subtitleDeleteUrl"),function(a){a&&((0,o.default)("success",Translator.trans("activity.video_manage.delete_success_hint")),t.parent().remove(),$("#"+e.upload_id).show())})})}},{key:"render",value:function(e){if(this.inited&&e&&"id"in e&&e.id>0){this.media=e,this.element.html(Translator.trans("activity.video_manage.subtitle_load_hint"));var t=this;$.get(this.element.data("dialogUrl"),{mediaId:this.media.id},function(e){t.element.html(e),t.initUploader()})}}},{key:"initUploader",value:function(){var e=this,t=$("#"+this.upload_id),a=$(".js-subtitle-dialog").data("mediaId"),n=t.data("mediaGlobalId");this.uploader&&this._destroyUploader();var i=new UploaderSDK({initUrl:t.data("initUrl"),finishUrl:t.data("finishUrl"),id:this.upload_id,ui:"simple",multi:!0,accept:{extensions:["srt"],mimeTypes:["text/srt"]},type:"sub",process:{videoNo:n},locale:document.documentElement.lang});i.on("error",function(e){"Q_TYPE_DENIED"===e.error&&(0,o.default)("danger",Translator.trans("activity.video_manage.subtitle_upload_error_hint"))}),i.on("file.finish",function(n){$.post(t.data("subtitleCreateUrl"),{name:n.name,subtitleId:n.id,mediaId:a}).success(function(t){var n={waiting:Translator.trans("activity.video_manage.convert_status_waiting"),doing:Translator.trans("activity.video_manage.convert_status_doing"),success:Translator.trans("activity.video_manage.convert_status_success"),error:Translator.trans("activity.video_manage.convert_status_error"),none:Translator.trans("activity.video_manage.convert_status_none")};$(".js-media-subtitle-list").append('<li class="pvs"><span class="subtitle-name prl">'+t.name+'</span><span class="subtitle-transcode-status '+t.convertStatus+'">'+n[t.convertStatus]+'</span><a href="javascript:;" class="btn-link pll color-primary js-subtitle-delete" data-subtitle-delete-url="/media/'+a+"/subtitle/"+t.id+'/delete">'+Translator.trans("activity.video_manage.subtitle_delete_hint")+"</a></li>"),$(".js-media-subtitle-list li").length>3&&$("#"+e.upload_id).hide(),(0,o.default)("success",Translator.trans("activity.video_manage.subtitle_upload_success_hint"))}).error(function(e){(0,o.default)("danger",e.responseJSON.error.message)})}),this.uploader=i}},{key:"show",value:function(){var e=this.element.parent(".form-group");e.length>0&&e.removeClass("hide")}},{key:"hide",value:function(){var e=this.element.parent(".form-group");e.length>0&&e.addClass("hide")}},{key:"_destroyUploader",value:function(){if(this.uploader){this.uploader.__events=null;try{this.uploader.destroy()}catch(e){}this.uploader=null}}},{key:"destroy",value:function(){this.inited&&this._destroyUploader()}}]),e}();t.default=l},0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=a("f7f8f67a4d1dcb4de779"),r=n(i);new r.default({element:"#modal",form:"#lesson-create-form"})},f7f8f67a4d1dcb4de779:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a("b4fbf03f4f16003fe503"),o=(n(s),a("b334fd7e4c5a19234db2")),l=n(o),u=a("eca7a2561fa47d3f75f6"),d=n(u),c=a("b00a2728f54f5fed6ab0"),f=n(c),m=function(){function e(t){i(this,e),this.$element=$(t.element),this.$form=$(t.form),this.validator(),this.initfileChooser()}return r(e,[{key:"validator",value:function e(){var t=this,e=this.$form.validate({currentDom:"#form-submit",ajax:!0,groups:{date:"minute second"},rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},minute:"required unsigned_integer",second:"required second_range",mediaSource:"required"},messages:{minute:{required:Translator.trans("activity.video_manage.length_required_error_hint")},second:{required:Translator.trans("activity.video_manage.length_required_error_hint"),second_range:Translator.trans("validate.second_range.message")},mediaSource:Translator.trans("activity.video_manage.media_error_hint")},submitSuccess:function(e){(0,l.default)("success",Translator.trans("open_course.lesson.create_success")),document.location.reload()},submitError:function(e){var t="",a=JSON.parse(e.responseText);a.error&&a.error.message&&(t=a.error.message),(0,l.default)("warning",Translator.trans("open_course.lesson.create_error")+":"+t)}});$("#form-submit").click(function(a){e.form()&&t.$form.submit()}),$(".js-length").blur(function(){if(e&&e.form()){var t=0|parseInt($("#minute").val()),a=0|parseInt($("#second").val());$("#length").val(60*t+a)}})}},{key:"initfileChooser",value:function(){var e=new d.default,t=new f.default(".js-subtitle-list"),a=function(e){if(d.default.closeUI(),e.length&&e.length>0){var a=parseInt(e.length/60),n=Math.round(e.length%60);$("#minute").val(a),$("#second").val(n),$("#length").val(60*a+n)}$("#mediaSource").val(e.source),"self"==e.source?($("#mediaId").val(e.id),$("#mediaUri").val("")):($("#mediaUri").val(e.uri),$("#mediaId").val(0)),t.render(e)};this.$element.on("click",".js-choose-trigger",function(e){d.default.openUI(),$('[name="mediaSource').val(null)}),e.on("select",a)}}]),e}();t.default=m},b4fbf03f4f16003fe503:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=arguments,n=function(e,t){var n=$('<div class="load-animation"></div>');n.prependTo(t).nextAll().hide(),t.append();var i=[],r=e.length;return function(t){return i.push(t),n.hide().nextAll().show(),i.length<r?a.callee:e.apply(null,i)}};t.default=n}});