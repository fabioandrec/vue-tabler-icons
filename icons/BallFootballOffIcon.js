import { createVNode, mergeProps, createTextVNode } from "vue";
export default {
  name: 'BallFootballOffIcon',
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
      "class": "icon icon-tabler icon-tabler-ball-football-off",
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
      "d": "M20.041 16.046a9 9 0 0 0 -12.084 -12.09m-2.323 1.683a9 9 0 0 0 12.726 12.73"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7l4.755 3.455l-.566 1.743l-.98 3.014l-.209 .788h-6l-1.755 -5.545l1.86 -1.351l2.313 -1.681z"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M12 7v-4"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "15",
      "y1": "16",
      "x2": "17.5",
      "y2": "19"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M16.755 10.455l3.745 -1.455"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M9.061 16.045l-2.561 2.955"
    }), createTextVNode("   "), createVNode("path", {
      "d": "M7.245 10.455l-3.745 -1.455"
    }), createTextVNode("   "), createVNode("line", {
      "x1": "3",
      "y1": "3",
      "x2": "21",
      "y2": "21"
    }), createTextVNode(" ")]);
  }

};