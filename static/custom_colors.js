$.FroalaEditor.DefineIcon('customColor', {NAME: 'tint'});
$.FroalaEditor.RegisterCommand('customColor', {
  title: 'Custom Color',
  focus: true,
  undo: true,
  refreshAfterCallback: true,
  callback: function () {
    this.colors.showPicker();
    this.colors.setColor('#8884d8');
  }
});