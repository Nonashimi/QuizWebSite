import { useMemo } from "react"

export const useSortedQuiz = (quizzes, sort) =>{
    const sortedQuiz = useMemo(() =>{
        if(sort){
          return [...quizzes].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return quizzes;
      }, [sort, quizzes])

      return sortedQuiz;
}

export const useQuiz = (quizzes, query, sort) =>{
    const sortedQuiz = useSortedQuiz(quizzes, sort);
    const sortedAndSearchedQuiz = useMemo(() => {
      return sortedQuiz.filter(quiz => quiz.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedQuiz]);

    return sortedAndSearchedQuiz;
}