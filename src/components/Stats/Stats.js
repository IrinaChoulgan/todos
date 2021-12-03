import React from 'react';
import './Stats.scss';
import { connect } from 'react-redux';

const Stats = ({ total, completed }) => (
  <div className="Stats">
    <p className="Stats__item">
      <span className="Stats__value">{total}</span>
      <span className="Stats__label">Всего</span>
    </p>
    <p className="Stats__item">
      <span className="Stats__value">{completed}</span>
      <span className="Stats__label">Выполнено</span>
    </p>
  </div>
);

const mapStateToProps = (state) => ({
  total: state.todos.items.length,
  completed: state.todos.items.reduce((total, todo) => (todo.completed ? total + 1 : total),0)
})

export default connect(mapStateToProps)(Stats);