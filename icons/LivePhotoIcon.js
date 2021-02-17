import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'LivePhotoIcon',
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
      "class": "icon icon-tabler icon-tabler-live-photo",
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
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "12",
      "cy": "12",
      "r": "1"
    }), createTextVNode("   "), createVNode("circle", {
      "cx": "12",
      "cy": "12",
      "r": "5"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15.9",
      "y1": "20.11",
      "x2": "15.9",
      "y2": "20.12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "19.04",
      "y1": "17.61",
      "x2": "19.04",
      "y2": "17.62"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "20.77",
      "y1": "14",
      "x2": "20.77",
      "y2": "14.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "20.77",
      "y1": "10",
      "x2": "20.77",
      "y2": "10.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "19.04",
      "y1": "6.39",
      "x2": "19.04",
      "y2": "6.4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15.9",
      "y1": "3.89",
      "x2": "15.9",
      "y2": "3.9"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "3",
      "x2": "12",
      "y2": "3.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8.1",
      "y1": "3.89",
      "x2": "8.1",
      "y2": "3.9"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4.96",
      "y1": "6.39",
      "x2": "4.96",
      "y2": "6.4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3.23",
      "y1": "10",
      "x2": "3.23",
      "y2": "10.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3.23",
      "y1": "14",
      "x2": "3.23",
      "y2": "14.01"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "4.96",
      "y1": "17.61",
      "x2": "4.96",
      "y2": "17.62"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "8.1",
      "y1": "20.11",
      "x2": "8.1",
      "y2": "20.12"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "12",
      "y1": "21",
      "x2": "12",
      "y2": "21.01"
    }), createTextVNode(" ")]);
  }

};