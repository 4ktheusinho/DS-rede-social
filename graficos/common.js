const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  
  export {getCSS}

  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color')
    
}

Plotly.newPlot(grafico, data, layout)
