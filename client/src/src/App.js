import quotes from './quotes.jpg';
import playlist from './playlist.jfif';
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import Modal from 'react-bootstrap/Modal'
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [task, setTask] = useState()
  const [hwclass, setHWClass] = useState()
  const [hwtask, setHWTask] = useState()
  const [song, setSong] = useState()
  const [dataPlaylist, setDataPlaylist] = useState([])
  const [dataHW, setDataHW] = useState([])
  const [focus, setFocus] = useState()
  const [dataFocus, setDataFocus] = useState([])
  const [lgShow, setLgShow] = useState(false);
  const [lgShowExam, setLgShowExam] = useState(false);
  const [duedate, setDuedate] = React.useState(new Date());
  const [examclass, setExamClass] = useState()
  const [dataExam, setDataExam] = useState([])
  const [examdate, setExamdate] = React.useState(new Date());


  function convertTZ(date, tzString) {
    return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', { timeZone: tzString }));
  }

  useEffect(() => {
    const getAllData = async() => {
      const response = await axios.get("http://localhost:5000/todolist")
      console.log(response.data);
      setData(response.data)
      setLoading(false)
    }
    getAllData();
  }, [])

  const postRequest = async () => {
    await axios.post("http://localhost:5000/todolist", 
      {
        task: task
      }
      ).then(
        window.location = "http://localhost:3000/"
      )
}

  const deleteRequest = async (id) => {
    await axios.delete(`http://localhost:5000/todolist/${id}`
    ).then(
      alert('Data berhasil dihapus')
    ).then(
      window.location = "http://localhost:3000/")
  }

  useEffect(() => {
    const getAllDataHomework = async() => {
      const { data } = await axios.get("http://localhost:5000/homework")
      console.log(data);
      setDataHW(data)
      setLoading(false)
    }
    getAllDataHomework();
  }, [])

  const postRequestHW = async () => {
    await axios.post("http://localhost:5000/homework", 
      {
        hwclass:hwclass,
        hwtask:hwtask,
        duedate:duedate
      }
      ).then(
        window.location = "http://localhost:3000/"
      )
}

  const deleteRequestHW = async (id) => {
    await axios.delete(`http://localhost:5000/homework/${id}`
    ).then(
      alert('Data berhasil dihapus')
    ).then(
      window.location = "http://localhost:3000/")
  }


  useEffect(() => {
    const getAllDataFocus = async() => {
      const { data } = await axios.get("http://localhost:5000/focus")
      console.log(data);
      setDataFocus(data)
      setLoading(false)
    }
    getAllDataFocus();
  }, [])

  useEffect(() => {
    const getAllDataExam = async() => {
      const { data } = await axios.get("http://localhost:5000/exam")
      console.log(data);
      setDataExam(data)
      setLoading(false)
    }
    getAllDataExam();
  }, [])

  const postRequestExam = async () => {
    await axios.post("http://localhost:5000/exam", 
      {
        examclass:examclass,
        examdate:examdate
      }
      ).then(
        window.location = "http://localhost:3000/"
      )
}

  const deleteRequestExam = async (id) => {
    await axios.delete(`http://localhost:5000/exam/${id}`
    ).then(
      alert('Data berhasil dihapus')
    ).then(
      window.location = "http://localhost:3000/")
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const updateRequestFocus = async (id) => {
    await axios.put(`http://localhost:5000/focus/${id}`,
    {
          focus:focus
    }
    ).then(
      window.location = "http://localhost:3000/")
    }

    const handleKeypress = e => {
      if (e.key === 'Enter'
        ) {
        updateRequestFocus(dataFocus.id);
      }
    };

    const handleKeypressSong = e => {
      if (e.key === 'Enter'
        ) {
        updateRequestPlaylist(dataPlaylist.id);
      }
    };

    useEffect(() => {
      const getAllDataPlaylist = async() => {
        const { data } = await axios.get("http://localhost:5000/playlist")
        console.log(data);
        setDataPlaylist(data)
        setLoading(false)
      }
      getAllDataPlaylist();
    }, [])

    const updateRequestPlaylist = async (id) => {
      await axios.put(`http://localhost:5000/playlist/${id}`,
      {
            song:song
      }
      ).then(
        window.location = "http://localhost:3000/")
      }


  const classes = useStyles();

  if(loading === true) return null;

  return (
    <>
    {/* header */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"/>
    <div className = "header">
      semangat.
    </div> 

    <Container>
      <Row>
    {/* to do list */}
    <Col xs="6" sm="4">
    <div className = "judulTDL">
      to do list
    </div>
    
    <div style={{position: 'relative', display: 'inline-block'}}>
      <AddIcon style={{position: 'absolute', right: 8, top: 23, width: 25, height: 25, cursor: 'pointer'}} onClick={() => postRequest()}/>
      <input className = "tambahTDL" type="text" required onChange={(e) => setTask(e.target.value)} />
    </div>
      
    <div className="tabelTDL">
    <table class="table table-borderless">
  <tbody>
    {data.map((data) => {
                return(
                  <>
                  <tr>
                  <th scope="row"><button className="tombolTDL" onClick={() => deleteRequest(data.id)}></button></th>
                  <td>{data.task}</td>
                  </tr>
                  </>
    )}
    )}
  </tbody>
</table>
</div>
</Col>
<Col xs="6" sm="4">
  <div className = "judulTF">
    today's focus
  </div>
  <div className="tabelTF">
  <table class="table table-borderless">
  <tbody>
  {dataFocus.map((dataFocus) => {
                return(
                  <>
                  <tr>
                  <td><div style={{position: 'relative', display: 'inline-block'}}>
      <AddIcon style={{position: 'absolute', right: 8, top: 9, width: 25, height: 25, cursor: 'pointer'}} onClick={() => updateRequestFocus(dataFocus.id)}/>
      <input type = "text" className = "tambahFocus" defaultValue={dataFocus.focus}  onChange={(e) => setFocus(e.target.value)} onKeyPress= {handleKeypress} />
    </div></td>
                  </tr>
                  </>
    )}
    )}
    </tbody>
    </table>
    </div>
</Col>
<Col xs="6" sm="4">
  <div className = "fotoQuotes">
  <img  className = "fotoQuotes" src={quotes} alt="foto"/>
  </div>
  <div className = "quotes">
    Your struggles do not define you. But they shape the person you become when you face them and overcome
  </div>
  
  </Col>
</Row>

<Row>
<Col xs="6">
  <div className = "tempatPlaylist">
    today's playlist
  <img  className = "fotoPlaylist" src={playlist} alt="foto"/>
  <div className = "laguPlaylist">
  <table class="table table-borderless">
  <tbody>
  {dataPlaylist.map((dataPlaylist) => {
                return(
                  <>
                  <tr>
                  <td><div style={{position: 'relative', display: 'inline-block'}}>
      <AddIcon style={{position: 'absolute', right: 8, top:5, width: 25, height: 25, cursor: 'pointer'}} onClick={() => updateRequestPlaylist(dataPlaylist.id)}/>
      <input className = "tambahPlaylist" type="text" defaultValue={dataPlaylist.song}  onChange={(e) => setSong(e.target.value)} onKeyPress={handleKeypressSong}/>
    </div></td>
                  </tr>
                  </>
    )}
    )}
    </tbody>
    </table>
  </div>
  </div>
</Col>
<Col xs="6">
  <div className = "judulHW">
  homework <AddIcon style={{width: 30, height: 30, cursor: 'pointer'}} onClick={() => setLgShow(true)}/>
  </div>
  <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header  >
          <Modal.Title id="example-modal-sizes-title-lg">
            <div className="judulModalsHW">
              new homework
            </div>
          </Modal.Title>
          <AddIcon style={{width: 30, height: 30, cursor: 'pointer'}} onClick={() => postRequestHW(true)}/>
        </Modal.Header>
        <Modal.Body>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="judulHWClass">
            class
          </div>
  <input className = "tambahHWClass" type="text" required onChange={(e) => setHWClass(e.target.value)} />
  <div className="judulHWClass">
    task
  </div>
  <input className = "tambahHWTask" type="text" required onChange={(e) => setHWTask(e.target.value)} />
</form>
        <div className="judulHWDuedate">due date</div>
          <DatePicker
      selected={duedate}
      onChange={(date) => setDuedate(date)}
      className="tempatHWDuedate"
    />
        </Modal.Body>
      </Modal>


  <div className="tabelHW">
  <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">class</th>
      <th scope="col">task</th>
      <th scope="col">due date</th>
    </tr>
  </thead>
  <tbody>
  {dataHW.map((dataHW) => {
              return(
                <>
                <tr>
                <th scope="row"><button className="tombolHW" onClick={() => deleteRequestHW(dataHW.id)}></button></th>
                <td>{dataHW.hwclass}</td>
                <td>{dataHW.hwtask}</td>
                <td>{(convertTZ(dataHW.duedate, 'Asia/Jakarta')).toString().slice(0, 15)}</td>
                </tr>
                </>
  )}
  )}

  </tbody>
</table>
</div>
  </Col>
</Row>

<Row>
  <Col>
  <div className = "judulExam">
  exam <AddIcon style={{width: 30, height: 30, cursor: 'pointer'}} onClick={() => setLgShowExam(true)}/>
  </div>
  <Modal
        size="lg"
        show={lgShowExam}
        onHide={() => setLgShowExam(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header  >
          <Modal.Title id="example-modal-sizes-title-lg">
            <div className="judulModalsHW">
              new exam
            </div>
          </Modal.Title>
          <AddIcon style={{width: 30, height: 30, cursor: 'pointer'}} onClick={() => postRequestExam(true)}/>
        </Modal.Header>
        <Modal.Body>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="judulHWClass">
            class
          </div>
  <input className = "tambahHWClass" type="text" required onChange={(e) => setExamClass(e.target.value)} />
</form>
        <div className="judulHWDuedate">date</div>
          <DatePicker
      selected={examdate}
      onChange={(date) => setExamdate(date)}
      className="tempatHWDuedate"
    />
        </Modal.Body>
      </Modal>

      <div className="tabelExam">
  <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">class</th>
      <th scope="col">date</th>
    </tr>
  </thead>
  <tbody>
  {dataExam.map((dataExam) => {
              return(
                <>
                <tr>
                <th scope="row"><button className="tombolHW" onClick={() => deleteRequestExam(dataExam.id)}></button></th>
                <td>{dataExam.examclass}</td>
                <td>{(convertTZ(dataExam.examdate, 'Asia/Jakarta')).toString().slice(0, 15)}</td>
                </tr>
                </>
  )}
  )}

  </tbody>
</table>
</div>
      </Col>
    </Row>
</Container>
    </>
  );
}

export default App;
