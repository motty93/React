import React from 'react'
import { TaskList } from './components/TaskList'
import { TaskInput } from './components/TaskInput'
import { Modal } from './components/Modal'
import './App.css'

let array1 = [0, 1, 'asdf']
interface NAME {
  first: string
  last: string | null
}

let nameObj: NAME = { first: 'yamada', last: 'taro' }
const func1 = (x: number, y: number): number => {
  return x + y
}

// Intersection Types
type Profile = {
  age: number
  city: string
}

type Login = {
  username: string
  password: string
}

type User = Profile & Login

const userA: User = {
  age: 30,
  city: 'fukuoka',
  username: 'xxx',
  password: 'password'
}

// Union Types
// 変数が受け取れるデータ型を制限する
let value: boolean | number
value = true
value = 10

let arrayUni: (number | string)[]
arrayUni = [0, 1, 2, 3, 'a']

// Literal Types
let company: 'facebook' | 'google' | 'amazon'
// error
// company = 'apple'
company = 'facebook'

let memory: 256 | 512
memory = 256

// typeof
let msg: string = 'Hi'
let msg2: typeof msg
// error
// msg2 = 123
msg2 = 'asdf'

// jsonに対して使えたりする
let animal = { cat: 'small cat' }
let newAnimal: typeof animal = { cat: 'new animal' }

// keyof
type Keys = {
  primary: string
  secondary: string
}
let key: keyof Keys // union typesで宣言される
key = 'primary'

// typeof + keyof
const Sports = {
  soccer: 'Soccer',
  baseball: 'Baseball'
}
let keySports: keyof typeof Sports
keySports = 'soccer'

// 列挙型enum
enum OS {
  Windows,
  Mac,
  Linux
}
interface PC {
  id: number
  OSType: OS
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows
}
const PC2: PC = {
  id: 2,
  OSType: OS.Mac
}

//型の互換性
const comp1 = 'test'
let comp2: string = comp1

let funcComp1 = (x: number) => {}
let funcComp2 = (x: string) => {}
// type error
// funcComp1 = funcComp2

// Generics ジェネリクス
interface Gen<T> {
  item: T
}
const gen0: Gen<string> = { item: 'hello' }
// error
// const gen1: Gen = { item: 'hello' }
const gen2: Gen<number> = { item: 12 }

interface Gen2<T = string> {
  item: T
}
const gen3: Gen2 = { item: 'hello' }
const gen4: Gen2<number> = { item: 12 }

interface Gen3<T extends string | number> {
  item: T
}
// error
// const gen5: Gen3<boolean> = { item: true }
const gen5: Gen3<string> = { item: 'asdf' }

function funcGen<T>(props: T) {
  return { item: props }
}
// const gen6 = funcGen<string>('test')
const gen6 = funcGen<string | null>('test')

function funcGen1<T extends string | null>(props: T) {
  return { value: props }
}
const gen7 = funcGen1('hello')
// const gen8 = funcGen1(123)

interface Props {
  price: number
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price * 2 }
}
const gen8 = funcGen3({ price: 10 })

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price }
}

const App: React.FC = () => {
  return (
    <div>
      <TaskInput />
      <TaskList />
      <Modal />
    </div>
  )
}

export default App
