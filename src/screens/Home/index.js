import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { withStyles } from '../../styles'

function Home({ styles }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.welcomeText}>Home!</Text>
    </View>
  )
}

Home.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default withStyles(({
  color, wWidth, family, fontSize,
}) => ({
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: color.primary,
  },
}))(Home)
