import streamlit as st
from PIL import Image

# --- SETTINGS ---
PAGE_TITLE = "Lokesh's Portfolio"
PAGE_ICON = ":wave:"
NAME = "Lokesh"
DESCRIPTION = """
I am a Software Developer specializing in Python, FastAPI, Machine Learning, and full-stack development. 
I build efficient and scalable solutions with a focus on high-quality code.
"""
EMAIL = "lokesh@example.com"
SOCIAL_MEDIA = {
    "LinkedIn": "https://www.linkedin.com/in/lokesh",
    "GitHub": "https://github.com/lokesh",
    "Twitter": "https://twitter.com/lokesh"
}
PROJECTS = {
    "Project 1 - AI Product Recommendation System": "Building an AI-based recommendation system for e-commerce.",
    "Project 2 - GainHub LMS": "A comprehensive Learning Management System for organization-wide collaboration.",
    "Project 3 - Microsoft Graph API Integration": "A Python-based application for file management using Microsoft Graph API."
}

# --- PAGE CONFIG ---
st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON)

# --- HEADER SECTION ---
st.title(f"{PAGE_TITLE} {PAGE_ICON}")
st.write(f"## {NAME}")

st.image(Image.open("lokesh.png"), width=250)  # Add your profile image here
st.write(DESCRIPTION)
st.write(f"📧 [Email me](mailto:{EMAIL})")

# --- SOCIAL LINKS ---
st.write("\n")
cols = st.columns(len(SOCIAL_MEDIA))
for index, (platform, link) in enumerate(SOCIAL_MEDIA.items()):
    cols[index].write(f"[{platform}]({link})")

# --- ABOUT SECTION ---
st.write("\n")
st.write("# About Me")
st.info("""
Hi! I'm Lokesh, a passionate developer with experience in full-stack development, machine learning, and API integrations. 
I love solving real-world problems and building scalable solutions with modern technologies.
""")

# --- PROJECTS SECTION ---
st.write("\n")
st.write("# Projects")
for project, description in PROJECTS.items():
    st.write(f"### {project}")
    st.write(description)
    st.write(f"[Learn more...](#)")  # You can link your project here

# --- CONTACT FORM ---
st.write("\n")
st.write("# Contact Me")
with st.form("contact_form"):
    name = st.text_input("Your Name")
    email = st.text_input("Your Email")
    message = st.text_area("Message")
    submit = st.form_submit_button("Send")
    if submit:
        st.write(f"Thank you {name}, I will get back to you soon!")

# --- CUSTOM STYLES ---
st.markdown("""
    <style>
        body {
            background-color: #1e1e2f;
            color: #ffffff;
        }
        .stButton>button {
            background-color: #ff007f;
            color: white;
            border-radius: 10px;
            font-size: 18px;
        }
        .stTextInput>div>input {
            background-color: #2c2c3e;
            color: #ffffff;
        }
        .stTextArea>div>textarea {
            background-color: #2c2c3e;
            color: #ffffff;
        }
        .stFormSubmitButton>button {
            background-color: #22c55e;
            border-radius: 10px;
        }
    </style>
""", unsafe_allow_html=True)
