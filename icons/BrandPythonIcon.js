import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BrandPythonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: s => !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x'
    }
  },

  setup(props, ctx) {
    const size = props.size.slice(-1) === 'x' ? props.size.slice(0, props.size.length - 1) + 'em' : parseInt(props.size) + 'px';
    const attrs = { ...ctx.attrs
    };
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    return () => createVNode("svg", mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-brand-python",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, { ...attrs
    }), [createTextVNode("   "), createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "11",
      "y1": "6",
      "x2": "11",
      "y2": "6.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "13",
      "y1": "18",
      "x2": "13",
      "y2": "18.01"
    }), createTextVNode(" ")]);
  }

};