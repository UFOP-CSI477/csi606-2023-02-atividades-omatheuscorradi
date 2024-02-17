import { useEffect, useState } from "react";
import { User } from "../models/UserModel";
import api from "../services/api";
import { successToast, errorToast } from "../utils/showToastNotification";
import { useNavigate } from "react-router-dom"
import jwt from "jwt-decode";


export default function useAuth() {

  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState()
  const navigator = useNavigate()

  async function fetchUser(id: string) {
    const { data: user } = await api.get(`/users/${id}`)
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const { id } = jwt(token) as { id: string }
      fetchUser(id)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setAuthenticated(true)

    }

  }, [])

  async function register(user: User) {

    try {
      const { data } = await api.post("/users/new", user)
      localStorage.setItem("token", data.token)
      // fetchUser(data.user.id)
      setAuthenticated(true)
      successToast("Usuário cadastrado com sucesso!")
      navigator("/")

    } catch (error: any) {
      errorToast(error.response.data.message)
    }
  }

  async function login(email: string, password: string) {
    try {
      const { data } = await api.post("/login", { email, password })
      localStorage.setItem("token", data.token)
      const { id } = jwt(data.token) as { id: string }
      await fetchUser(id)
      setAuthenticated(true)
      successToast("Seja muito bem vindo!")
      navigator(`/`)

    } catch (error: any) {
      errorToast(error.response.data.message)
    }
  }

  function logout() {
    localStorage.removeItem("token")
    setAuthenticated(false)
    successToast("Até Logo!")
    navigator("/login")
  }

  async function update(user: FormData) {

    try {
      const { data } = await api.put(`/users/update`, user, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      setUser(data.user)
      setAuthenticated(true)
      successToast("Atualizado com sucesso!")

    } catch (error: any) {
      errorToast(error.response.data.message)
    }
  }

  async function createPet(pet: FormData) {

    try {
      const { data } = await api.post(`/pets/new`, pet, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      successToast("Seu pet foi inserido!")
      navigator("/")


    } catch (error: any) {
      errorToast(error.response.data.message)
    }
  }

  return { register, logout, login, update, createPet, authenticated, user }

}