import React, { useState, useEffect } from 'react';
import { X, Save, Loader, UploadCloud } from 'lucide-react';

const AdminModal = ({ isOpen, onClose, title, fields, initialData, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({});
  const [previews, setPreviews] = useState({}); 

  useEffect(() => {
    if (isOpen) {
        if (initialData) {
            const formattedData = { ...initialData };
            // handle array fields for editing
            fields.forEach(field => {
                if (field.type === 'array' && Array.isArray(initialData[field.name])) {
                    formattedData[field.name] = initialData[field.name].join(', ');
                }
            });
            setFormData(formattedData);
            // set preview if existing image
            if (initialData.imageUrl) {
                setPreviews({ imageUrl: initialData.imageUrl });
            }
        } else {
            setFormData({});
            setPreviews({});
        }
    }
  }, [isOpen, initialData, fields]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle file upload -> convert to base64
  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [fieldName]: reader.result }));
        setPreviews(prev => ({ ...prev, [fieldName]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const processedData = { ...formData };
    
    // convert array strings back to arrays
    fields.forEach(field => {
        if (field.type === 'array') {
            const val = formData[field.name];
            processedData[field.name] = val ? val.split(',').map(s => s.trim()).filter(s => s) : [];
        }
    });

    onSubmit(processedData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#181818] w-full max-w-2xl rounded-xl border border-[#333] shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* header */}
        <div className="p-5 border-b border-[#333] flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        {/* body */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
          <form id="admin-form" onSubmit={handleSubmit} className="space-y-5">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {field.label}
                </label>
                
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    rows={4}
                    placeholder={field.placeholder}
                    className="bg-[#2a2a2a] border border-transparent focus:border-green-500 rounded p-3 text-white outline-none transition placeholder-gray-600 resize-none"
                  />
                ) : field.type === 'image' ? (
                   /* custom image input */
                   <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4">
                        {previews[field.name] && (
                            <img 
                                src={previews[field.name]} 
                                alt="Preview" 
                                className="w-20 h-20 object-cover rounded-lg border border-[#444]"
                            />
                        )}
                        <label className="flex items-center gap-2 cursor-pointer bg-[#2a2a2a] hover:bg-[#333] text-gray-300 px-4 py-2 rounded border border-[#444] transition">
                            <UploadCloud size={18} />
                            <span className="text-sm">Choose File</span>
                            <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden"
                                onChange={(e) => handleFileChange(e, field.name)}
                            />
                        </label>
                      </div>
                      {/* fallback text input for url */}
                      <input
                        type="text"
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        placeholder="Or paste image URL..."
                        className="bg-[#2a2a2a] border border-transparent focus:border-green-500 rounded p-3 text-white outline-none transition placeholder-gray-600 text-sm"
                      />
                   </div>
                ) : (
                  <input
                    type={field.type === 'number' ? 'number' : 'text'}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="bg-[#2a2a2a] border border-transparent focus:border-green-500 rounded p-3 text-white outline-none transition placeholder-gray-600"
                  />
                )}
                
                {field.type === 'array' && (
                    <p className="text-[10px] text-gray-500">Separate items with commas</p>
                )}
              </div>
            ))}
          </form>
        </div>

        {/* footer */}
        <div className="p-5 border-t border-[#333] flex justify-end gap-3 bg-[#181818] rounded-b-xl">
          <button onClick={onClose} className="px-5 py-2 text-gray-300 font-bold hover:text-white transition" type="button">Cancel</button>
          <button form="admin-form" type="submit" disabled={isSubmitting} className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-full flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? <Loader className="animate-spin" size={18} /> : <Save size={18} />}
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminModal;