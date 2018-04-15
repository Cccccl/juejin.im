const indexParams = {
  suid: 'aemu3ZqVijiqQj2QEFiB',
  ab: 'welcome_3',
  src: 'web'
}

export const getData = (whichAction, store, self, params = indexParams) => {
  console.log(store)
  console.log(self)
  console.log(params)
  return new Promise(resolve => {
    store.dispatch(whichAction, params).then(res => {
      if (self) {
        const { d, m, s } = res
        if (s === 1) {
          if (whichAction === 'recommends') {
            self[whichAction].push(...d)
          } else if (whichAction === 'entries') {
            self[whichAction].push(...d.entrylist)
          }
        } else {
          self.$message({
            message: m,
            type: 'warning'
          })
        }
        self.scrollStatus = true
      }
      resolve(res)
    })
  })
}

export const getParams = (params) => {
  let category = ''
  let result = {}
  switch (params.category) {
    case 'frontend':
      category = '5562b415e4b00c57d9b94ac8'
      break
    case 'android':
      category = '5562b410e4b00c57d9b94a92'
      break
    case 'backend':
      category = '5562b419e4b00c57d9b94ae2'
      break
    case 'ai':
      category = '57be7c18128fe1005fa902de'
      break
    case 'ios':
      category = '5562b405e4b00c57d9b94a41'
      break
    case 'freebie':
      category = '5562b422e4b00c57d9b94b53'
      break
    case 'article':
      category = '5562b428e4b00c57d9b94b9d'
      break
    default:
      break
  }
  result = {
    category: category,
    ab: 'welcome_3',
    src: 'web'
  }
  return result
}
