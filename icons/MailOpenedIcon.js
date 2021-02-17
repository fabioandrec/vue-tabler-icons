import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'MailOpenedIcon',
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
      "class": "icon icon-tabler icon-tabler-mail-opened",
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
    }), createTextVNode("   "), createVNode("polyline", {
      "points": "3 9 12 15 21 9 12 3 3 9"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "19",
      "x2": "9",
      "y2": "13"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "13",
      "x2": "21",
      "y2": "19"
    }), createTextVNode(" ")]);
  }

};