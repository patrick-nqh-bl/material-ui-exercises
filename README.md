# Patrick's Project(using Material UI, React)
1. Re-code by me:
* Source video:
> https://www.youtube.com/watch?v=nF9q_fRV-1A&list=PLcCp4mjO-z98WAu4sd0eVha1g-NMfzHZk&index=4

## It hasn't completed and will comeback soon... 

2. Function awesome:
* Matched array follow object and then fixed as array with 2 element

      getExercisesByMuscles() {
        return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
          const { muscles } = exercise;
          exercises[muscles] = exercises[muscles]
            ? [...exercises[muscles], exercise]
            : [exercise]

          return exercises
        }, {})
        )
      } 