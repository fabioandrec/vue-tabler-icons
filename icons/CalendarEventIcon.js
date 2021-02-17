import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'CalendarEventIcon',
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
      "class": "icon icon-tabler icon-tabler-calendar-event",
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
    }), createTextVNode("   "), createVNode("rect", {
      "x": "4",
      "y": "5",
      "width": "16",
      "height": "16",
      "rx": "2"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "16",
      "y1": "3",
      "x2": "16",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8",
      "y1": "3",
      "x2": "8",
      "y2": "7"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4",
      "y1": "11",
      "x2": "20",
      "y2": "11"
    }), createTextVNode("   "), createVNode("rect", {
      "x": "8",
      "y": "15",
      "width": "2",
      "height": "2"
    }), createTextVNode(" ")]);
  }

};