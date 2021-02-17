import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'DropletFilled2Icon',
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
      "class": "icon icon-tabler icon-tabler-droplet-filled-2",
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
      "d": "M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M6 14h12"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7.305 17.695l3.695 -3.695"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M10.26 19.74l5.74 -5.74l-5.74 5.74z"
    }), createTextVNode(" ")]);
  }

};