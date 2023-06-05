import {useOutletContext} from "react-router-dom";

export default function ProductDetailsStorage() {
    const storage = useOutletContext().storage;

    return (
      <p>
        <strong>Storage instructions:</strong> {storage}
      </p>
    );
}
