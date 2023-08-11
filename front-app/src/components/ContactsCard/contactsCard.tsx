import { ContactData } from "@/schemas/contactsSchemas";

export interface ContactsProps {
  contacts: ContactData[];
}

export const ContactsCard = ({ contacts }: ContactsProps) => {
  return (
    <ul className={"grid bg  grid-cols-2 gap-4"}>
      {
        contacts.length > 0 ? <>
            {contacts.map((contact) => (
            <li
              key={contact.id}
              id={`${contact.id}`}
              className={"bg-slate-100 p-6 rounded flex flex-col gap-4"}
            >
              <h2 className={"titles"}>{contact.name}</h2>
    
              <p>Email: {contact.email}</p>
              <p>Telefone: {contact.phone_number}</p>
              <button className={"button"}>Atualizar Contato</button>
              <button className={"button "}>Excluir Contato</button>
            </li>
          ))}
        </>:
          <p>Adicione um contato!</p>
      }
    </ul>
  );
};
