import React from 'react'
import {Smilef} from '@libprov/smilef'
import {Alertf} from '@libprov/alertf'
import {Buttons} from '@libprov/buttons'
import {SliderTable} from '@libprov/dots'
const Test = () => {
  return (
    <div className="App">
      <div>
        <Smilef sad message1="hola este es hello" title="hello" />
      </div>
      <div></div>
      <div>
        <Alertf mensaje="hello im testing" type="info" />
      </div>
      <Buttons
        show={[true, true]}
        cleanMessage="clean"
        generateMessage="generate"
      />

      <div>
        <SliderTable
          positionChangeListener={() => {
            console.log('hey do somenthing we i change position')
          }}
          clickable={true}
          size={'small'}
          length={3}
          position={0}
        />
      </div>
    </div>
  )
}

export default Test
