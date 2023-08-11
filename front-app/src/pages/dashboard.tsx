import { ContactsCard, ContactsProps } from "@/components/ContactsCard/contactsCard";
import { ContactData } from "@/schemas/contactsSchemas";
import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "./api/api";
import nookies from "nookies"

const dashboard = ({contacts}: ContactsProps) => {

  return (
    <>
        <nav className={"bg-slate-900 w-full h-23 p-7"}>
            <button className={"button w-32 text-xs font-normal"}>Adicionar contato</button>
        </nav>
    <main className="body flex flex-col items-center justify-between p-24 min-h-full">
        
        <ContactsCard contacts={contacts}/>
    </main>
    </>
  );
};

export default dashboard;

const token = {}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookies = nookies.get(ctx)
    const token = cookies['@TOKEN'] || ''
    const contacts = await api.get<ContactData>("/contacts", {
        headers: {Authorization: `Bearer ${token}`}
    })

    return {props: {contacts: contacts.data}}
}
