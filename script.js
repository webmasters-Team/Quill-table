var bubble = new Quill('#bubble-container', {
    theme: 'bubble',
    modules: {
      table: true,
    }
  });
  var snow = new Quill('#snow-container', {
    theme: 'snow',
    modules: {
      table: true,
    }
  });
  var output = new Quill('#output-container', {
    theme: 'bubble',
    modules: { table: true },
    readOnly: true,
  })
  bubble.on('text-change', function(delta, old, source) {
    if (source === 'user') {
      snow.updateContents(delta, 'api');
      updateOutput();
    }
  });
  const table = snow.getModule('table');
  snow.on('text-change', function(delta, old, source) {
    if (source === 'user') {
      bubble.updateContents(delta, 'api');
      updateOutput();
    }
  });
  
  function updateOutput() {
    const bubbleContent = bubble.getContents();
    const snowContent = snow.getContents();
    // TODO compare
    output.setContents(bubbleContent);
    const outputContent = output.getContents();
    // TODO compare outputContent
  }
  
  
  document.querySelector('#insert-table').addEventListener('click', function() {
    table.insertTable(2, 2);
  });
  document.querySelector('#insert-row-above').addEventListener('click', function() {
    table.insertRowAbove();
  });
  document.querySelector('#insert-row-below').addEventListener('click', function() {
    table.insertRowBelow();
  });
  document.querySelector('#insert-column-left').addEventListener('click', function() {
    table.insertColumnLeft();
  });
  document.querySelector('#insert-column-right').addEventListener('click', function() {
    table.insertColumnRight();
  });
  document.querySelector('#delete-row').addEventListener('click', function() {
    table.deleteRow();
  });
  document.querySelector('#delete-column').addEventListener('click', function() {
    table.deleteColumn();
  });
  document.querySelector('#delete-table').addEventListener('click', function() {
    table.deleteTable();
  });