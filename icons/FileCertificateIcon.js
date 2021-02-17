import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'FileCertificateIcon',
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
      "class": "icon icon-tabler icon-tabler-file-certificate",
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
      "d": "M14 3v4a1 1 0 0 0 1 1h4"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "6",
      "cy": "14",
      "r": "3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"
    }), createTextVNode(" ")]);
  }

};