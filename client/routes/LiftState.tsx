import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const style = {
  table: {
    borderCollapse: 'collapse',
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
}
type Entry = {
  firstName: string
  lastName: string
  phone: number
}

function PhoneBookForm({ addEntryToPhoneBook }: { addEntryToPhoneBook: React.Dispatch<React.SetStateAction<Entry[]>> }) {
  const [firstName, setFirstName] = useState<string>('Coder')
  const [lastName, setLastName] = useState<string>('Byte')
  const [phone, setPhone] = useState<number>(8885559999)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    addEntryToPhoneBook((state) =>
      [...state, { firstName, lastName, phone }].sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      )
    )
  }

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={String(phone)}
        onChange={(e) => setPhone(Number(e.target.value))}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  )
}

function InformationTable({ phoneBookEntries }: { phoneBookEntries: Entry[] }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      {phoneBookEntries.map((entry, i) => (
        <tr key={i}>
          <td style={style.tableCell}>{entry.firstName}</td>
          <td style={style.tableCell}>{entry.lastName}</td>
          <td style={style.tableCell}>{entry.phone}</td>
        </tr>
      ))}
    </table>
  )
}

export function Application() {
  const [phoneBookEntries, addEntryToPhoneBook] = useState<Entry[]>([])

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable phoneBookEntries={phoneBookEntries} />
    </section>
  )
}

ReactDOM.render(<Application />, document.getElementById('root'))
