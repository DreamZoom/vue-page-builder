export default {
	bind: function(el, binding, vnode) {
		el.addEventListener(
			'dblclick',
			(e) => {
				console.log(e);
                el.setAttribute('contenteditable', 'true');
                el.focus();
				if (window.getSelection) {
                    var range = window.getSelection();
                    range.selectAllChildren(el);
                    range.collapseToEnd();
				} else if (document.selection) {
					var range = document.selection.createRange();
					range.moveToElementText(el);
					range.collapse(false);
					range.select();
				}
			},
			false
		);

		el.addEventListener(
			'blur',
			(e) => {
				console.log(e);
				el.removeAttribute('contenteditable');
			},
			false
		);

		if (binding.value) {
			el.innerHTML = binding.value;
		}

		console.log(vnode);
		el.addEventListener(
			'input',
			(e) => {
				setValue(vnode.context, binding.expression, el.innerHTML);
			},
			false
		);

		function setValue(context, expression, value) {
			var keys = expression.split('.');
			var p = context;
			var key = '';
			for (let index = 0; index < keys.length - 1; index++) {
				var key = keys[index];
				p = p[key];
			}
			if (key != '') {
				key = keys[keys.length - 1];
			}
			p[key] = value;
		}
	},
	unbind: function() {}
};
