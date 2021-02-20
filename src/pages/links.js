import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import data from "../data/data.json"

const links = data.links

const javascriptLinks = links
  .map(link => {
    return link
  })
  .filter(link => link.type.includes("javascript"))

const roadmapsLinks = links
  .map(link => {
    return link
  })
  .filter(link => link.type.includes("roadmap"))

const personalLinks = links
  .map(link => {
    return link
  })
  .filter(link => link.type.includes("personal"))

const mustReadLinks = links
  .map(link => {
    return link
  })
  .filter(link => link.type.includes("mustread"))

const Links = data => (
  <Layout>
    <LinksContainer>
      <Picture
        src="https://instagram.fkun1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/105393475_602659287047547_518076014624486901_n.jpg?_nc_ht=instagram.fkun1-1.fna.fbcdn.net&_nc_ohc=Kdc2Y_PKaF4AX-4cMvx&tp=1&oh=6e68416e93a2329d3f259082b0624ecc&oe=605BB32C"
        alt="@berta.codes"
      ></Picture>
      <b>
        <p>@berta.codes</p>
      </b>
      {personalLinks.map(link => {
        return (
          <LinkButton href={link.url} target="_blank">
            {link.title}
          </LinkButton>
        )
      })}

      <br></br>
      <SectionTitle>Developer roadmaps</SectionTitle>
      {roadmapsLinks.map(link => {
        return (
          <LinkButton href={link.url} target="_blank">
            {link.title}
          </LinkButton>
        )
      })}

      <br></br>
      <SectionTitle>Javascript</SectionTitle>
      {javascriptLinks.map(link => {
        return (
          <LinkButton href={link.url} target="_blank">
            {link.title}
          </LinkButton>
        )
      })}

      <br></br>
      <SectionTitle>must read</SectionTitle>
      {mustReadLinks.map(link => {
        return (
          <LinkButton href={link.url} target="_blank">
            {link.title}
          </LinkButton>
        )
      })}
    </LinksContainer>
  </Layout>
)

export default Links

const LinksContainer = styled.section`
  height: 100vh;
  max-width: 400px;
  width: 100%;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const Picture = styled.img`
  border-radius: 50%;
  height: 120px;
`
const SectionTitle = styled.b`
  color: #000;
  text-transform: uppercase;
`
const LinkButton = styled.a`
  max-width: 400px;
  width: 95%;
  height: 50px;
  border-radius: 32px;
  text-align: center;
  cursor: pointer;
  background: rgb(32 31 31 / 90%);
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 5px;
  transition: all 300ms ease-in-out;

  &:hover {
    background: rgb(32 31 31 / 80%);
  }
`
