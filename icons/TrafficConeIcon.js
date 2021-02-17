import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'TrafficConeIcon',
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
      "class": "icon icon-tabler icon-tabler-traffic-cone",
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
      "x1": "4",
      "y1": "20",
      "x2": "20",
      "y2": "20"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "9.4",
      "y1": "10",
      "x2": "14.6",
      "y2": "10"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "7.8",
      "y1": "15",
      "x2": "16.2",
      "y2": "15"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M6 20l5 -15h2l5 15"
    }), createTextVNode(" ")]);
  }

};