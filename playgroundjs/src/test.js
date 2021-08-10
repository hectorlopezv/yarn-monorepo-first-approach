import React, {useState} from 'react'
import {Smilef} from '@libprov/smilef'
import {Alertf} from '@libprov/alertf'
import {Buttons} from '@libprov/buttons'
import {SliderTable} from '@libprov/dots'
import {Card} from '@libprov/card'
import {Cards} from '@libprov/cards'
import {Date} from '@libprov/date'
import {Download} from '@libprov/download'
import {Loader} from '@libprov/loader'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import moment from 'moment'

const CloseIcon = props => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      title="closeIcon"
      {...props}
    >
      <path
        d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"
        stroke="none"
      />
    </svg>
  )
}
const Test = () => {
  const cleanData = () => {
    console.log('cleaning data')
  }
  const [date, setdate] = useState(null)
  const dateHandler = value => {
    console.log('entro')
    setdate(moment(value))
  }
  return (
    <div className="App">
      <div>
        <Smilef sad message1="hola este es hello" />
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
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Card
                icon={<CloseIcon className="card__icon" />}
                title={'Reporte de Marcación de Riesgo'}
                link={'/Reporte'}
                linkTitle={'SELECCIONAR'}
                onClick={cleanData}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <div>
        <Date
          minDateSelector={null}
          maxDateSelector={null}
          disabled={false}
          Date={date}
          handleChange={dateHandler}
          label="datelabel"
          tooltip={() => (
            <div>
              <p>im tooltip</p>
            </div>
          )}
        />
      </div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Cards title="title cards container" classExtra="extraClass">
                <>
                  <Card
                    icon={<CloseIcon className="card__icon" />}
                    title={'Consulta de Riesgos'}
                    link={'/Consulta'}
                    linkTitle={'SELECCIONAR'}
                    onClick={cleanData}
                  />
                  <Card
                    icon={<CloseIcon className="card__icon" />}
                    title={'Reporte de Marcación de Riesgo'}
                    link={'/Reporte'}
                    linkTitle={'SELECCIONAR'}
                    onClick={cleanData}
                  />
                </>
              </Cards>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <div>
        <Download
          filename="hector"
          messageZipPart1="hello1"
          messageZipPart2="hello2"
          disabled={false}
          btnMessage={'message'}
          querySickLeaves={() => console.log('hello excel')}
        />
      </div>
      <div>
        <Loader loading noBack />
      </div>
    </div>
  )
}

export default Test
