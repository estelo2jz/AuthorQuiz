const model = {
  running: false,
  time: 0
};

const view = (model) => <div>{model.time}</div>;

ReactDOM.render(view(model),
  document.getElementById('root')
);