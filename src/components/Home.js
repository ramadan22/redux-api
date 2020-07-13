import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { showAllData } from '../modules/actions/AllData__Action'

const Home = ({showAllData, list}) => {

  useEffect(() => {
    showAllData()
  }, [showAllData])

  // console.log(list.data)
  // console.log(list.dataBanner)

  return (
    <>
      <p>Test</p>
    </>
  )
}

const mapStateToProps = ( state ) => ({
  list: state.AllData
})

const mapDispatchToProps = {
  showAllData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)