import AttachmentActions from '../../attachment/widget/attachment-actions';

class QuestionFormBase {
  constructor($form) {
    this.$form = $form;
    this.titleFieldId = 'question-stem-field';
    this.analysisFieldId = 'question-analysis-field';
    this.validator = null;
    this.titleEditorToolBarName = 'Minimal';
    this._init();
    this.attachmentActions = new AttachmentActions($form);
  }

  _init() {
    this._initEvent();
    this._initValidate();
    this._initSelect();
  }

  _initEvent() {
    this.$form.on('click', '[data-role=submit]', event => this.submitForm(event));
  }

  submitForm(event) {
    let submitType = $(event.currentTarget).data('submission');
    this.$form.find('[name=submission]').val(submitType);
    let self = this;

    if (this.validator.form()) {
      $(event.currentTarget).button('loading');
      self.$form.submit();
    }
  }

  _initValidate() {
    let validator = this.$form.validate({
      onkeyup: false,
      rules: {
        difficulty: {
          required: true,
        },
        stem: {
          required: true,
        },
        score: {
          required: true,
          number: true,
          max: 999,
          min: 0,
          es_score: true
        }
      },
      messages: {
        difficulty: Translator.trans('course.question.create.difficulty_required_error_hint')
      }
    });
    this.validator = validator;
  }

  _initSelect() {
    $('#categoryId').select2({
      treeview: true,
      dropdownAutoWidth: true,
      treeviewInitState: 'collapsed',
      placeholderOption: 'first'
    });
  }

  initTitleEditor(validator) {
    let $target = $('#' + this.titleFieldId);
    let editor = CKEDITOR.replace(this.titleFieldId, {
      toolbar: this.titleEditorToolBarName,
      fileSingleSizeLimit: app.fileSingleSizeLimit,
      filebrowserImageUploadUrl: $target.data('imageUploadUrl'),
      height: $target.height()
    });

    editor.on('change', () => {
      $target.val(editor.getData());
      validator.form();

      console.log(editor.getData());
    });
    editor.on('blur', () => {
      $target.val(editor.getData());
      validator.form();
      console.log(editor.getData());
    });
  }

  initAnalysisEditor() {
    let $target = $('#' + this.analysisFieldId);
    let editor = CKEDITOR.replace(this.analysisFieldId, {
      toolbar: this.titleEditorToolBarName,
      fileSingleSizeLimit: app.fileSingleSizeLimit,
      filebrowserImageUploadUrl: $target.data('imageUploadUrl'),
      height: $target.height()
    });

    editor.on('change', () => {
      $target.val(editor.getData());
    });
  }

  set titleEditorToolBarName(toolbarName) {
    this._titleEditorToolBarName = toolbarName;
  }

  get titleEditorToolBarName() {
    return this._titleEditorToolBarName;
  }
}

export default QuestionFormBase;