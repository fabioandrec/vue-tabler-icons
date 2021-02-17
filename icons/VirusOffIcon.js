import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'VirusOffIcon',
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
      "class": "icon icon-tabler icon-tabler-virus-off",
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
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M8.469 8.46a5 5 0 0 0 7.058 7.084m1.386 -2.608a5 5 0 0 0 -5.826 -5.853"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(45 12 12)"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(90 12 12)"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "3",
      "x2": "13",
      "y2": "3",
      "transform": "rotate(135 12 12)"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(180 12 12)"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(225 12 12)"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(270 12 12)"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "3",
      "x2": "11",
      "y2": "3",
      "transform": "rotate(315 12 12)"
    }), createTextVNode(" ")]);
  }

};