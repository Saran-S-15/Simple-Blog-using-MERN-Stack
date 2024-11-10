import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({formik}) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                <Select
                    labelId="Tag"
                    id="Tag"
                    name="Tag"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Tag}
                    label="Tag"
                >
                    <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                    <MenuItem value="Tech">Tech</MenuItem>
                    <MenuItem value="Travel">Travel</MenuItem>
                    <MenuItem value="Art & Design">Art & Design</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="Business & Enterpreneurship">Business & Enterpreneurship</MenuItem>
                    <MenuItem value="Education & Career">Education & Career</MenuItem>
                    <MenuItem value="Science & Environment">Science & Environment</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    <MenuItem value="Sports & Fitness">Sports & Fitness</MenuItem>
                    <MenuItem value="Foods & Drinks">Foods & Drinks</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
