'use strict'

module.exports = function() {
  return {
    visitor: {
      JSXAttribute: function(path,state) {
        if(!state||!state.opts) return;
        var item = state.opts[path.node.name.name];
        if(!item) return;
        path.node.name.name = typeof item=='string'?item:(item.name||path.node.name.name);
        if(typeof item.value=='string') path.node.value.value = item.value.replace('{value}',path.node.value.value);
      }
    }
  }
}
