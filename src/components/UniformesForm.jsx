import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UniformesForm.css';

const apiUrl = import.meta.env.VITE_UNIFORMES_API_URL || 'https://uniformes-backend.herokuapp.com';

const UniformesForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [uniforme, setUniforme] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    tipo: '',
  });

  const [existingPhotos, setExistingPhotos] = useState([]);
  const [newFiles, setNewFiles] = useState([]);
  const [newPreviews, setNewPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchUniform
