import { Api } from '../../helpers/Api'

// let currentID = [0, 1];

export const showAllData = (value) => {
  return dispatch => {
    // console.log('aa')
    // type: "SHOW_ALL_DATA",
    // data: "test"

    Api.get()
      .then((res) => {
        dispatch(dataApi(res.data))
        dispatch(dataBanner(res.data.DATA.banner))
      })

  }
}

const dataApi = (data) => ({
  type: "SHOW_ALL_DATA",
  load: { data }
})

const dataBanner = (data) => ({
  type: "SHOW_BANNER",
  load: { data }
})