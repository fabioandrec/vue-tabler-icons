import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'ChartRadarIcon',
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
      "class": "icon icon-tabler icon-tabler-chart-radar",
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
      "d": "M12 3l9.5 7l-3.5 11h-12l-3.5 -11z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M2.5 10l9.5 3l9.5 -3"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 3v10l6 8"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M6 21l6 -8"
    }), createTextVNode(" ")]);
  }

};