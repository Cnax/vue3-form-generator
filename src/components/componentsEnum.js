export default [
  {
    name: "单行输入框",
    type: "input",
    icon: "icon-input",
    options: {
      key: null,
      col: 8,
      label: '单行输入框',
			placeholder: "请输入",
			maxlength: 50,
			disabled: false,
			readonly: false,
		}
  },
  {
    name: "数字输入框",
    type: "input-number",
    icon: "icon-input-number",
    options: {
      key: null,
      col: 8,
      label: '数字输入框',
      disabled: false,
			placeholder: "请输入",
			min: 0,
			max: 0,
			'controls-position': "",
    }
  },
  {
    name: "开关",
    type: "switch",
    icon: "icon-switch",
    options: {
      key: null,
      col: 8,
      label: '开关',
      disabled: false,
			'active-text': '',
      'inactive-text': '',
    }
  }
]