import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import '../assets/styles/form.scss';
import DataContext from '../context/DataContext';
import { actionTypes } from '../Reducer';

const Forms = () => {
    const { state, dispatch, handleSubmit } = useContext(DataContext);
    const { duzenlenecekKitap, kitapAdi, kitapYazari, kitapKategorisi, kitapSayfaSayisi, kitapResmi, kitapAciklamasi } = state;
    return (
        <div className="form-container">
            <h1 className='form-title'>
                {duzenlenecekKitap ? "Kitap Düzenleme Formu" : "Kitap Ekleme Formu"}
                <hr />
            </h1>
            <Card className="custom-card">
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupKitapAdi">
                            <Form.Label className="form-label">Kitap Adı</Form.Label>
                            <Form.Control value={kitapAdi} onChange={(e) => dispatch({ type: actionTypes.KITAP_ADI, payload: e.target.value })} type="text" placeholder="Kitap Adı" className="form-control" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupKitapYazari">
                            <Form.Label className="form-label">Kitap Yazarı</Form.Label>
                            <Form.Control value={kitapYazari} onChange={(e) => dispatch({ type: actionTypes.KITAP_YAZARI, payload: e.target.value })} type="text" placeholder="Yazar" className="form-control" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Kategori</Form.Label>
                            <Form.Select value={kitapKategorisi} onChange={(e) => dispatch({ type: actionTypes.KITAP_KATEGORISI, payload: e.target.value })} className="form-control">
                                <option disabled>Kategori Seçiniz</option>
                                <option>Yazılım</option>
                                <option>Edebiyat</option>
                                <option>Tarih</option>
                                <option>Diğer</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formGroupSayfaSayisi" className="mb-3">
                            <Form.Label>Sayfa Sayısı</Form.Label>
                            <Form.Control value={kitapSayfaSayisi} onChange={(e) => dispatch({ type: actionTypes.KITAP_SAYFA_SAYISI, payload: e.target.value })} type="number" placeholder="Sayfa Sayısı" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Kitap Resm Url Ekle</Form.Label>
                            <Form.Control value={kitapResmi} onChange={(e) => dispatch({ type: actionTypes.KITAP_RESMI, payload: e.target.value })} type="text" placeholder="Kitap Kapak Resmi Url" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kitap Açıklaması</Form.Label>
                            <Form.Control value={kitapAciklamasi} onChange={(e) => dispatch({ type: actionTypes.KITAP_ACIKLAMASI, payload: e.target.value })} as="textarea" placeholder="Kitap Açıklaması" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-primary" disabled={kitapAdi === "" || kitapYazari === "" || kitapKategorisi === "Kategori Seçiniz" || kitapSayfaSayisi === 0 || kitapAciklamasi === ""}>
                            {duzenlenecekKitap ? "Düzenle" : "Kitap Ekle"}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Forms;
