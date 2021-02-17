import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'VirusSearchIcon',
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
      "class": "icon icon-tabler icon-tabler-virus-search",
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
      "d": "M17 12a5 5 0 1 0 -5 5"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(45 12 12)"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(90 12 12)"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(180 12 12)"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(225 12 12)"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(270 12 12)"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4m-1 0h2",
      "transform": "rotate(315 12 12)"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "17.5",
      "cy": "17.5",
      "r": "2.5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "19.5",
      "y1": "19.5",
      "x2": "22",
      "y2": "22"
    }), createTextVNode(" ")]);
  }

};