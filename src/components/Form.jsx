import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import defaultImage from '../assets/img/defaultImage.jpg';
import '../assets/styles/form.scss';

const Forms = ({ yeniKitapEkleDuzenle, kitaplik, duzenlenecekKitap }) => {
    const [kitapAdi, setKitapAdi] = useState("");
    const [kitapYazari, setKitapYazari] = useState("");
    const [kitapKategorisi, setKitapKategorisi] = useState("Kategori Seçiniz");
    const [kitapSayfaSayisi, setKitapSayfaSayisi] = useState(0);
    const [kitapResmi, setKitapResmi] = useState("");
    const [kitapAciklamasi, setKitapAciklamasi] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Kitap Başarıyla Eklendi!");
        const resimUrl = kitapResmi !== "" ? kitapResmi : defaultImage;
        yeniKitapEkleDuzenle({
            id: kitaplik.length > 0 ? (Number(kitaplik[kitaplik.length - 1].id) + 1).toString() : "1",
            kitapAdi: kitapAdi,
            kitapYazari: kitapYazari,
            kitapKategorisi: kitapKategorisi,
            kitapSayfaSayisi: kitapSayfaSayisi,
            kitapResmi: resimUrl,
            kitapAciklamasi: kitapAciklamasi
        });
        setKitapAdi("");
        setKitapYazari("");
        setKitapKategorisi("Kategori Seçiniz");
        setKitapSayfaSayisi(0);
        setKitapResmi("");
        setKitapAciklamasi("");
    };

    useEffect(() => {
        if (duzenlenecekKitap) {
            setKitapAdi(duzenlenecekKitap.kitapAdi);
            setKitapYazari(duzenlenecekKitap.kitapYazari);
            setKitapKategorisi(duzenlenecekKitap.kitapKategorisi);
            setKitapResmi(duzenlenecekKitap.kitapResmi);
            setKitapSayfaSayisi(duzenlenecekKitap.kitapSayfaSayisi);
            setKitapAciklamasi(duzenlenecekKitap.kitapAciklamasi);
        }
    }, [duzenlenecekKitap])

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
                            <Form.Control value={kitapAdi} onChange={(e) => setKitapAdi(e.target.value)} type="text" placeholder="Kitap Adı" className="form-control" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupKitapYazari">
                            <Form.Label className="form-label">Kitap Yazarı</Form.Label>
                            <Form.Control value={kitapYazari} onChange={(e) => setKitapYazari(e.target.value)} type="text" placeholder="Yazar" className="form-control" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Kategori</Form.Label>
                            <Form.Select value={kitapKategorisi} onChange={(e) => setKitapKategorisi(e.target.value)} className="form-control">
                                <option disabled>Kategori Seçiniz</option>
                                <option>Yazılım</option>
                                <option>Edebiyat</option>
                                <option>Tarih</option>
                                <option>Diğer</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formGroupSayfaSayisi" className="mb-3">
                            <Form.Label>Sayfa Sayısı</Form.Label>
                            <Form.Control value={kitapSayfaSayisi} onChange={(e) => setKitapSayfaSayisi(e.target.value)} type="number" placeholder="Sayfa Sayısı" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Kitap Resm Url Ekle</Form.Label>
                            <Form.Control value={kitapResmi} onChange={(e) => setKitapResmi(e.target.value)} type="text" placeholder="Kitap Kapak Resmi Url" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kitap Açıklaması</Form.Label>
                            <Form.Control value={kitapAciklamasi} onChange={(e) => setKitapAciklamasi(e.target.value)} as="textarea" placeholder="Kitap Açıklaması" />
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
