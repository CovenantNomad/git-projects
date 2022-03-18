import { atom, selector } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true
    },
  ]
})


export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All'
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const list = get(todoListState)
    const filter = get(todoListFilterState)

    switch (filter) {
      case 'Show Completed' :
        return list.filter((item) => item.done);

      case 'Show Uncompleted' :
        return list.filter((item) => !item.done);
    
      default:
        return list;
    }
  }
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const list = get(todoListState)

    const totalNum = list.length
    const totalCompletedNum = list.filter(item => item.done).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }; 
  }
})