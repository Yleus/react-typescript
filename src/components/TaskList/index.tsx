import React from 'react';

// CSS
import { Container, Details, Actions } from './styles';

// interfaces
import { ITask } from '../../interfaces/Task';



interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({taskList, handleDelete, handleEdit} : Props) => {
  return (
  <>
    {taskList.length > 0 ? (
      taskList.map((task) => (
        <Container key={task.id}>
          <Details>
            <h4>{task.title}</h4>
            <p>Dificuldade: {task.difficulty}</p>
          </Details>
          <Actions>
            <i className='bi bi-pencil' onClick={() => handleEdit(task)}></i>
            <i className='bi bi-trash' onClick={() => {handleDelete(task.id)}}></i>
          </Actions>
        </Container>
      ))
        
      ) : (
      <p>Não há tarefas cadastradas!</p>
    )}
  </>
  );
}

export default TaskList;