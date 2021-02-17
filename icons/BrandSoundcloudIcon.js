import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BrandSoundcloudIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-soundcloud",
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
      "d": "M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9",
      "y1": "8",
      "x2": "9",
      "y2": "17"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "6",
      "y1": "17",
      "x2": "6",
      "y2": "10"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "16",
      "x2": "3",
      "y2": "14"
    }), createTextVNode(" ")]);
  }

};